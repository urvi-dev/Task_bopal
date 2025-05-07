import { useState } from "react";
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { message } from "antd";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return { isOpen, open, close };
  };
  
  // Custom hook for file parsing
 export const useFileParser = () => {
    const [jsonData, setJsonData] = useState(null);
  
    const parseFile = (file) => {
      const fileExtension = file.name.split('.').pop().toLowerCase();
  
      if (fileExtension === 'csv') {
        Papa.parse(file, {
          complete: (result) => {
            const [headers, ...rows] = result.data;
            processData(headers, rows);
          },
          header: false,
          skipEmptyLines: true
        });
      } else if (fileExtension === 'xlsx') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          const [headers, ...rows] = jsonData;
          processData(headers, rows);
        };
        reader.readAsArrayBuffer(file);
      }
    };
  
    const processData = (headers, rows) => {
      const jsonResult = rows.map((row) => {
        const obj = {};
        headers.forEach((header, index) => {
          obj[header.trim()] = row[index];
        });
        return obj;
      });
      setJsonData(jsonResult);
      console.log(jsonResult); // For debugging, remove if not needed
      message.success(`File processed successfully`);
    };
  
    return { jsonData, parseFile, processData };
  };
  