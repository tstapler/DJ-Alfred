package djafred.backend.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table
class SongSuggestion {
    @Id
    @GeneratedValue
    Integer id

    @Column
    String title

    @Column artist
}
