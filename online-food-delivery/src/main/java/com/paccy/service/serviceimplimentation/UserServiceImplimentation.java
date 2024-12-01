package com.paccy.service.serviceimplimentation;

import com.paccy.config.JwtProvider;
import com.paccy.model.User;
import com.paccy.repository.UserRepository;
import com.paccy.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplimentation implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    //@Autowired
    //private CartRepository cartRepository;

    //@Autowired
    //private ModelMapper modelMapper;

    @Autowired
    private JwtProvider jwtProvider;
    @Override
    public User userByJwtToken(String jwt) throws Exception {
       String email= jwtProvider.getEmailFromJwtToken(jwt);
       User user = finduserByEmail(email);
       return user;
    }

    @Override
    public User finduserByEmail(String email) throws Exception {
       User user =userRepository.findByEmail(email);
       if(user==null){
           throw new Exception("user not found");
       }
        return user;
    }
}
