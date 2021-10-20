package com.lightningducks.sustainableswaps.webcontroller;

import com.lightningducks.sustainableswaps.controllers.WebController;
import com.lightningducks.sustainableswaps.data.Product;
import org.assertj.core.util.IterableUtil;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

public class WebControllerTest {

    @Test
    public void getAllProducts() {
        WebController webController = new WebController();
        Iterable<Product> content = webController.getAllProducts();
        Assert.assertNotNull(content);
    }

    @Test
    public void search() {
        WebController webController = new WebController();
        Iterable<Product> searchResults = webController.search("shoes");
        Assert.assertNotNull(searchResults);
        Assert.assertEquals(2, IterableUtil.sizeOf(searchResults));
        System.out.println(searchResults);
    }
}
