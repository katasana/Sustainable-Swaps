package com.lightningducks.sustainableswaps.controllers;

import com.google.common.collect.ImmutableMap;
import com.lightningducks.sustainableswaps.data.Product;
import com.lightningducks.sustainableswaps.data.ProductRepository;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;

@Controller
public class WebController {

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping("/")
    public String getHome() {
        return "index.html";
    }

    @GetMapping("/database/get-all")
    public @ResponseBody Iterable<Product> getAllProducts() {
        System.out.println("In backend getAllProducts method...");
        return productRepository.findAll();
    }

    @PostMapping("/database/search")
    public @ResponseBody Iterable<Product> search(@RequestParam String keyword) {
        // tokenize string
        StringTokenizer tokenizer = new StringTokenizer(keyword);
        List<String> keywords = new ArrayList<>();
        while (tokenizer.hasMoreTokens()) {
            keywords.add(tokenizer.nextToken());
        }

        // search product database keywords
        System.out.println(productRepository.findAll());
        List<Product> allProducts = (ArrayList<Product>)productRepository.findAll();
        List<Product> searchResults = new ArrayList<>();
        int productsCount = allProducts.size();
        int indexOfKeywords;
        int indexOfProductDescription;

        for (int i = 0; i < productsCount; i++) {
            Product curProduct = allProducts.get(i);
            String product = curProduct.toString();
            indexOfKeywords = product.indexOf("keywords") + 7; // start searching keywords from after 'keywords' column
            // indexOfProductDescription = product.indexOf("productDescription"); // end search at 'product_description' column (following column)
            String keywordsColumn = (product.substring(indexOfKeywords)).toLowerCase();

            for (int j = 0; j < keywords.size(); j++) {
                if (keywordsColumn.contains(keywords.get(i).toLowerCase())) {
                    searchResults.add(curProduct);
                }
            }
        }

        return searchResults;
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

    @RequestMapping(value = "/page", method = RequestMethod.GET)
    @ResponseBody
    String jsoup() throws IOException{
        Document jsoup = Jsoup.connect("http://jsoup.org").get();
        String jsoupTitle = jsoup.title();
        return (jsoupTitle);
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
