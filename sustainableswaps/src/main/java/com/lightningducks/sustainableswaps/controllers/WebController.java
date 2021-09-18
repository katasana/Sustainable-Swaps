package com.lightningducks.sustainableswaps.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import java.io.IOException;

@Controller
public class WebController {

    @RequestMapping("/")
    public String getHome() {
        return "home.html";
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

}
