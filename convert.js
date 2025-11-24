// convert.js - convert books.xlsx -> books.json
// Usage: npm i xlsx && node convert.js
const xlsx = require('xlsx');
const fs = require('fs');

// Read the Excel file with the correct name
const wb = xlsx.readFile('ALL BOOKS 📚📚📚 DATA .xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet, {defval:''});

// Map the columns correctly based on the actual Excel structure
const normalized = data.map((r,i)=>({
  id: r['ACC NO.'] || i+1, 
  title: r.TITLE || '', 
  author: r.AUTHOR || '', 
  type: r.TYPE || '',
  price: r.PRICE || '',
  cupboard: r['CUPBOARD NO.'] || '',
  subject: r['SUBJECT '] || '', // Note the trailing space in the column name
  description: '' // No description column in this dataset
}));

fs.writeFileSync('books.json', JSON.stringify(normalized, null, 2));
console.log('Saved books.json with', normalized.length, 'records');