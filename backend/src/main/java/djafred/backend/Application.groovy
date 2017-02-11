package djafred.backend

import djafred.backend.services.EventService;
import djafred.backend.services.PlaylistService;
import djafred.backend.services.SongService
import djafred.backend.services.SongSuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
class Application implements CommandLineRunner {


    @Autowired
    private PlaylistService playlistService;

    @Autowired
    private SongService songService;

    @Autowired
    private EventService eventService

    @Autowired
    private SongSuggestionService songSuggestionService

    static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    void run(String... strings) throws Exception {
        createInitialEvents()
        createInitialPlaylists()
        createInitialSongSuggestions()
    }

    void createInitialEvents() {
        eventService.createEvent("All day event ", "stuff",
                new Date().parse("yyy-mm-dd", "2016-01-01"), new Date())
        eventService.createEvent("Long Event", "stuff",
                new Date().parse("yyy-mm-dd", "2016-01-07"),
                new Date().parse("yyy-mm-dd", "2016-01-10"))
        eventService.createEvent("Repeating Event", "stuffs", new Date().parse("yyy-mm-dd", "2016-01-09"),
                new Date().parse("yyy-mm-dd", "2016-01-09"))
        eventService.createEvent("Conference", "stuff", new Date().parse("yyy-mm-dd", "2016-01-11"),
                new Date().parse("yyy-mm-dd", "2016-01-13"))
    }

    void createInitialPlaylists() {
        playlistService.createPlaylist("CountDown", "Chris")
    }

    void createInitialSongSuggestions() {
        songSuggestionService.createSongSuggestion("Santeria", "Sublime")
        songSuggestionService.createSongSuggestion("Louie Armstrong", "What a wonderful world")
    }
}


