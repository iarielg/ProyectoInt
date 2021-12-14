package com.neverdies.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neverdies.backend.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.hamcrest.Matchers.containsString;


@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {
	@Autowired
	private MockMvc mockMvc;

	@Test
	public void TestPut() throws Exception{
		this.mockMvc.perform(put(
				"/api/users/5?currentPassword=Pa$$w0rd&password=P@$$w0rd"))
				.andDo(print())
				.andExpect(status().isOk());
	}//put


	@Test
	public void TestGet() throws Exception {
	this.mockMvc.perform(get("/api/users/") ).andDo(print())
			.andExpect(status().isOk())
			.andExpect(content().string(containsString
					("@gmail.com") ) ) ;
	}//testget
	@Test
	public void TestDelete() throws Exception{
		this.mockMvc.perform( delete("/api/users/5")).andDo(print())
				.andExpect(status().isOk());
	}
	@Test
	public void shouldReturn404Error() throws Exception{
		this.mockMvc.perform( get("/api/users/5")).andDo(print())
				.andExpect(status().is5xxServerError());
	}//should

	@Test
	public void TestPost() throws Exception{
		User user = new User();
		user.setEmail("eflores@gmail.com");
		user.setPassword("Pa$$w0rd");
		this.mockMvc.perform(post("/api/users/").
				contentType(MediaType.APPLICATION_JSON).
				content(asJSONString(user))).
				andExpect(status().isOk());
	}//TestPost
	public static String asJSONString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}//asJSONString
	

}//class
