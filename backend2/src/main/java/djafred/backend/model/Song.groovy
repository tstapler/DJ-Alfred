package djafred.backend.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Table

@Entity
@Table
class Song implements Serializable {
    @Column
    String name

    @Column
    String albumn

    @Column
    String artist

}
