package appSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.model.Genre;

public interface GenreRepository extends JpaRepository<Genre, Integer> {

	Genre findByName(String name);

}
