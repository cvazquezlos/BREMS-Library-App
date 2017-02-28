package appSpring;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Override
    protected void configure(HttpSecurity http) throws Exception {
		
		//PUBLIC PAGES
		http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/about").permitAll();
		http.authorizeRequests().antMatchers("/contact").permitAll();
		http.authorizeRequests().antMatchers("/profileBook").permitAll();
		http.authorizeRequests().antMatchers("/search").permitAll();
		
		//PRIVATE PAGES
		http.authorizeRequests().antMatchers("/add_loan").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/add_resource").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/add_user").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/fines_management").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/home").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/loans_management").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/resource_management").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/user_management").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/userprofile").hasAnyRole("USER");
		
		//LOGIN FORM
		http.formLogin().loginPage("");
        http.formLogin().usernameParameter("username");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/");
        http.formLogin().failureUrl("");
        
        //LOGOUT
        http.logout().logoutUrl("");
        http.logout().logoutSuccessUrl("");
	}
	
	@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        
    	//USERS
        auth.inMemoryAuthentication().withUser("user").password("pass").roles("USER");
        
        //ADMIN
        auth.inMemoryAuthentication().withUser("admin").password("adminpass").roles("USER", "ADMIN");
    }

}
