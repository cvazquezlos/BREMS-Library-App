package appSpring.repository;

import appSpring.entity.Genre;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Integer> {

	Genre findByName(String name);

}
