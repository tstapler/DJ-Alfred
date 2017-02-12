package djafred.backend.model


import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.persistence.Table
import javax.persistence.Transient

@Entity
@Table
class Playlist implements Serializable {

    @Id
    @GeneratedValue
    private Integer id

    @Column
    String name

    @Column
    String createdBy

}
