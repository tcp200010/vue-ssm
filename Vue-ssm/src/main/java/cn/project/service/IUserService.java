package cn.project.service;
import cn.project.domain.User;
import java.util.List;

/**
 * 账户的业务层口
 */
public interface IUserService {
    /**
     * 查询用户列表
     */
    List<User> findAll();

    /**
     * 根据id查询
     */
    User findById(int id);

    /**
     * 修改用户
     */
    void updateUser(User User);
}
