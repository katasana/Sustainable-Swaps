package com.lightningducks.sustainableswaps.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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

}
