import html2pdf from 'html2pdf.js';
import { Parser as Json2CsvParser } from 'json2csv';

export function downloadPDF(elementId: string, filename: string) {
  const element = document.getElementById(elementId);
  if (element) {
    html2pdf().from(element).save(filename);
  }
}

export function downloadCSV(data: any[], filename: string) {
  const json2csv = new Json2CsvParser({ fields: Object.keys(data[0]) });
  const csv = json2csv.parse(data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
}