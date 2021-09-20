//Test Test :)
package com.lightningducks.sustainableswaps.controllers;

import com.google.common.collect.ImmutableMap;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;
import java.util.Map;

import com.google.common.collect.ImmutableMap;

@Controller
public class WebController {

    @RequestMapping("/")
    public String getHome() {
        return "home.html";
    }

    @GetMapping(value = "/A3/camryn", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String A3Camryn() {
        String text = "<html><body style='background-color: #D28F33;'><h1 style='text-align: center;'>My name is Camryn and I love pumpkin spice lattes.</h1></html></body>";
        return text;
    }

    @RequestMapping(value = "/sustainable/page", method = RequestMethod.GET)
    @ResponseBody
    String sustainablePage() {
        return "A page of Sustainable Swaps";
    }

    @GetMapping(value = "/A4/camryn", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String A4Camryn() throws IOException {
        String text = "<html><body style='background-color: #ADD8E6; text-align: center'><h1>Apache Poi</h1>" +
                "<p>Apache Poi reads .xlsx files. Below, Apache Poi is reading and printing an .xlsx file containing data showing the percentage of how frequent each letter in the alphabet is used in the English language.</p>" +
                "<div>";

        File myFile = new File("C:\\Users\\camry\\IdeaProjects\\sustainableswaps\\Sustainable-Swaps\\sustainableswaps\\src\\main\\java\\com\\lightningducks\\sustainableswaps\\A4data\\alphabet.xlsx");
        FileInputStream fis = new FileInputStream(myFile);

        XSSFWorkbook myWorkbook = new XSSFWorkbook(fis);
        XSSFSheet mySheet = myWorkbook.getSheetAt(0);

        Iterator<Row> rowIterator = mySheet.iterator();

        while(rowIterator.hasNext()) {
            Row row = rowIterator.next();

            Iterator<Cell> cellIterator = row.cellIterator();
            while (cellIterator.hasNext()) {
                text += "<p>";

                for (int i = 0; i < 2; i++) {
                    Cell cell = cellIterator.next();

                    switch (cell.getCellType()) {
                        case Cell.CELL_TYPE_STRING:
                            text += cell.getStringCellValue();
                            break;
                        case Cell.CELL_TYPE_NUMERIC:
                            text += cell.getNumericCellValue();
                    }

                    if (i == 0) { text += " - "; }
                }
                text += "</p>";
            }
        }

        text += "</div></body></html>";

        return text;
    }

    // kimberly's assignments
    @RequestMapping("/A3/kimberly")
    @ResponseBody
    public String a3Kimberly() {
        String text = "<html><head><title>Hi this is Kimberly!</title><body><p>Hello this is my A3</p></body></head></html>";
        return text;
    }

    @RequestMapping("/A4/kimberly")
    @ResponseBody
    public Map a4Kimberly() {
        Map lunchBox = ImmutableMap.of("title: ", "This is the contents of my lunchbox created using ImmutableMap.of","cookie", 1, "fork", 1, "sandwich", 2);
        return lunchBox;
    }
}