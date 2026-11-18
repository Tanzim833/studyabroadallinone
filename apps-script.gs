/* ===========================================================================
   GOOGLE SHEET RECEIVER — paste into  Sheet → Extensions → Apps Script
   Then:  Deploy → Manage deployments → pencil → Version: New version → Deploy
   (the web-app link does not change, so SHEET_URL in app.js stays the same)

   It handles BOTH forms on the site:
     · quick-check "send these answers"   → tab "Enquiries"
     · Book free consultation (full form) → tab "Consultations"
   Each tab is created automatically with its header row on first use.
   =========================================================================== */

var ENQ_HEAD = ['Date & time','Name','WhatsApp','Level','Result','Budget (lakh)','IELTS','Band','Note','Language'];
var CON_HEAD = ['Date & time','Name','WhatsApp','Email','City','Level','Last education','Pass year','Result','Scale',
                'Study gap','IELTS status','Band','Destination','Subject','Budget (lakh)','Passport','Visa refused before',
                'Best time to call','Intake','Note / full summary','Language','Status'];

function tab_(name, head){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(head);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, head.length).setFontWeight('bold').setBackground('#1A3E36').setFontColor('#ffffff');
  }
  return sh;
}

function doPost(e){
  try {
    var p = JSON.parse(e.postData.contents);
    var when = Utilities.formatDate(new Date(), 'Europe/Bucharest', 'yyyy-MM-dd HH:mm');
    var sheetLevel = p.level || '';

    if (p.source === 'consultation') {
      tab_('Consultations', CON_HEAD).appendRow([
        when, p.name, "'" + (p.phone || ''), p.email || '', p.city || '', sheetLevel,
        p.qualification || '', p.passYear || '', p.result || '', p.scale || '',
        p.gap || '', p.ielts || '', p.band || '', p.destination || '', p.subject || '',
        p.budget || '', p.passport || '', p.refused || '', p.callTime || '',
        p.intake || '', p.note || '', p.lang || '', 'New'
      ]);
    } else {
      tab_('Enquiries', ENQ_HEAD).appendRow([
        when, p.name, "'" + (p.phone || ''), sheetLevel, p.result ? p.result + '/' + p.scale : '',
        p.budget || '', p.ielts || '', p.band || '', p.note || '', p.lang || ''
      ]);
    }
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err).setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet(){ return ContentService.createTextOutput('StudyPath receiver is running'); }
