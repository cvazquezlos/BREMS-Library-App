package appSpring.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.model.Fine;
import appSpring.repository.FineRepository;

@RestController
@RequestMapping("/api/fine")
public class FineRestController {

	public interface FineDetail extends Fine.Basic, Fine.ResoCopy, Fine.Usr {}
	
	@Autowired
	private FineRepository fineRepository;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Fine postFine(@RequestBody Fine fine) {

		fineRepository.save(fine);

		return fine;
	}

	@JsonView(FineDetail.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<List<Fine>> getAllFine() {
		
		List<Fine> fines = fineRepository.findAll();
		if (fines != null) {
			return new ResponseEntity<>(fines, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(FineDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Fine> getFine(@PathVariable int id) {

		Fine fine = fineRepository.findOne(id);
		if (fine != null) {
			return new ResponseEntity<>(fine, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Fine> putFine(@PathVariable Integer id, @RequestBody Fine fineUpdated) {

		Fine fine = fineRepository.findOne(id);
		if ((fine != null) && (fine.getId() == fineUpdated.getId())) {
			fineRepository.save(fineUpdated);
			return new ResponseEntity<>(fineUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Fine> deleteFine(@PathVariable Integer id) {

		Fine fine = fineRepository.findOne(id);
		if (fine != null) {
			fineRepository.delete(fine);
			return new ResponseEntity<>(fine, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
