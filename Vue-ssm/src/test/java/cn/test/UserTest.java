package cn.test;

import cn.project.domain.User;
import cn.project.service.IUserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

//spring对junit的整合
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class UserTest {
    @Autowired
    private IUserService userService;

    @Test
    public void testFindAll(){
        List<User> Users = userService.findAll();
        for (User User : Users) {
            System.out.println(User);
        }
    }

    @Test
    public void testUpdate(){
        User user=new User();
        user.setUsername("westbrook");
        user.setAge(19);
        user.setSex("male");
        user.setEmail("slb@xzjt.com");
        user.setPassword("789123");
        user.setId(7);
        userService.updateUser(user);
    }
}
