
import com.nhaarman.mockito_kotlin.mock
import org.junit.Test
import org.mockito.Mockito.verify


class Example {

    private lateinit var perri: Perri

    @Test
    fun `bleh`() {
        perri = mock()

        perri.plus("a")

        verify(perri).plus("a")
    }
}