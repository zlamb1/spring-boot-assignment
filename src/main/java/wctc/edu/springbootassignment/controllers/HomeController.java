package wctc.edu.springbootassignment.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String showHomePage() {
        return "index";
    }

    @RequestMapping("/tutorial1")
    public String showTutorial1() {
        return "removing_strings";
    }

    @RequestMapping("/tutorial2")
    public String showTutorial2() {
        return "adding_strings";
    }

    @RequestMapping("/tutorial3")
    public String showTutorial3() {
        return "tuning_strings";
    }
}
