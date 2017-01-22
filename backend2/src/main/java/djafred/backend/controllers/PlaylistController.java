package djafred.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlaylistController {
    @RequestMapping("/api/playlists")
    public ResponseEntity<?> getAllPlaylists() {
        return new ResponseEntity<String>("Hello World", HttpStatus.OK);
    }
}
