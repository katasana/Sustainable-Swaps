package com.lightningducks.sustainableswaps.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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

}
