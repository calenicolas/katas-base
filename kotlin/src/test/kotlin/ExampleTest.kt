
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.junit.Test
import kotlin.test.assertEquals

class ExampleTest {
    @Test
    fun `classicist approach`() {
        assertEquals(1, 1)
    }

    @Test
    fun `mockist approach`() {
        val example = mock<ExampleColaborator>()
        example.doStuff()

        verify(example).doStuff()
    }
}