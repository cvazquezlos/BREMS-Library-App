package appSpring.service;

import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import appSpring.model.ImagesPath;
import appSpring.model.User;
import appSpring.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public User findOne(Integer id) {
		return repository.findOne(id);
	}

	public List<User> findAll() {
		return repository.findAll();
	}
	
	public Page<User> findAll(int page) {
		return repository.findAll(new PageRequest(page,3));
	}

	public User findByName(String name) {
		return repository.findByName(name);
	}

	public User findByEmail(String email) {
		return repository.findByEmail(email);
	}

	public void save(User user) {
		repository.save(user);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

	public void delete(User user) {
		repository.delete(user);
	}
	
	public String handleUploadImagetoDatabase(MultipartFile imageMultiPartFile, long idPath, String files_folder) throws IOException {
		String id = String.valueOf(idPath);
		String filename = id + ".jpg";
		if (!imageMultiPartFile.isEmpty()) {
			try {
				File filesFolder = new File(files_folder);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				File uploadedFile = new File(filesFolder.getAbsolutePath(), filename);
				System.out.println("Absoulte : " + filesFolder.getAbsolutePath());
				imageMultiPartFile.transferTo(uploadedFile);
				return filename;
			} catch (Exception e) {
				return ("ERROR" + e);
			}

		}
		return "ERROR";
	}
	
	public String getImageData(String filename) throws IOException {
		File fileFolder = new File(ImagesPath.IMAGES_USER.toString());
		File targetFile = new File(fileFolder, filename);
		if (targetFile.exists()) {
			BufferedImage image = ImageIO.read(targetFile);
			return imgToBase64String(image, "jpg");
		} else {
			targetFile = new File(fileFolder, "user_undefined.jpg");
			BufferedImage image = ImageIO.read(targetFile);
			return imgToBase64String(image, "jpg");
		}
	}
	
	private static String imgToBase64String(final RenderedImage img, final String formatName) {
		final ByteArrayOutputStream os = new ByteArrayOutputStream();
		try {
			ImageIO.write(img, formatName, Base64.getEncoder().wrap(os));
			return os.toString(StandardCharsets.ISO_8859_1.name());
		} catch (final IOException ioe) {
			throw new UncheckedIOException(ioe);
		}
	}

}
