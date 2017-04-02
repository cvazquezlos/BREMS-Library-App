package appSpring.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import appSpring.repository.UserRepositoryAuthenticationProvider;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthenticationProvider authenticationProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// PUBLIC PAGES
		http.authorizeRequests().antMatchers("/css/**", "/js/**", "/img/**", "/fonts/**").permitAll();
		http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/api/**").permitAll();
		http.authorizeRequests().antMatchers("/login").permitAll();
		http.authorizeRequests().antMatchers("/about").permitAll();
		http.authorizeRequests().antMatchers("/contact").permitAll();
		http.authorizeRequests().antMatchers("/profileBook").permitAll();
		http.authorizeRequests().antMatchers("/search").permitAll();
		http.authorizeRequests().antMatchers("/topBar").permitAll();

		// PRIVATE PAGES
		http.authorizeRequests().antMatchers("/admin/css/**", "/admin/js/**", "/admin/img/**", "/admin/fonts/**")
				.hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/user_profile", "/user_profile/edit/**").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/{id}/reserve").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/admin/", "/admin/**").hasAnyRole("ADMIN");

		// LOGIN
		http.formLogin().loginPage("/login");
		http.formLogin().usernameParameter("username");
		http.formLogin().passwordParameter("password");
		http.formLogin().defaultSuccessUrl("/");
		http.formLogin().failureUrl("/loginError");

		// LOGOUT
		http.logout().logoutUrl("/logout");
		http.logout().logoutSuccessUrl("/");

		http.csrf().disable();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider);
	}

}
