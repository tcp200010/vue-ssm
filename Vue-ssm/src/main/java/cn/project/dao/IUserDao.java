package cn.project.dao;
import cn.project.domain.User;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 用户的持久层接口
 */
@Repository
public interface IUserDao {
    /**
     * 查询用户列表
     */
    @Select("select * from user")
    List<User> findAll();

    /**
     * 根据id查询
     */
    @Select("select * from user where id=#{id}")
    User findById(int id);

    /**
     * 修改用户
     */
    @Update("update user set age=#{age},username=#{username},password=#{password},email=#{email},sex=#{sex} where id=#{id}")
    void updateUser(User user);
}
