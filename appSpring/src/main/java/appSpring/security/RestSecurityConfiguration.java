package appSpring.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import appSpring.repository.UserRepositoryAuthenticationProvider;

@Configuration
@Order(1)
public class RestSecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthenticationProvider userRepoAuthProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		// URLs that need authentication to access to it
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/fines/**", "/api/resourcecopies/**", "/api/genres/**", "/api/loans/**", "/api/users/{id}").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/resourcetypes/**", "/api/genres/**", "/api/resources/all", "/api/resources/{id}").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/users/all").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/**/**").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/**/**").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/fines/", "/api/genres/", "/api/resourcecopies/", "/api/resourcetypes/", "/api/resources/").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/**/**").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/users/**").hasAnyRole("USER");

		// USE HTTP BASIC AUTHENTICATION
		http.httpBasic();

		// Do not redirect when logout
		http.logout().logoutSuccessHandler((rq, rs, a) -> {	});

		http.csrf().disable();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(userRepoAuthProvider);
	}
}
