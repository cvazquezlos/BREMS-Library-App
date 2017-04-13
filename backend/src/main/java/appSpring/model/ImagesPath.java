package appSpring.model;

public enum ImagesPath {
	
	IMAGES_USER("src/main/resources/static/img/avatars"),
	IMAGES_RESOURCE("src/main/resources/static/img/books");
	
	private final String text;
	
	private ImagesPath(String text) {
		this.text = text;
	}
	
	@Override
	public String toString() {
		return text;
	}

}
