/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package sharing_travel_social_neyworks_fe;

import org.gradle.testfixtures.ProjectBuilder;
import org.gradle.api.Project;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * A simple unit test for the 'sharing_travel_social_neyworks_fe.greeting' plugin.
 */
class Sharing_travel_social_neyworks_fePluginTest {
    @Test void pluginRegistersATask() {
        // Create a test project and apply the plugin
        Project project = ProjectBuilder.builder().build();
        project.getPlugins().apply("sharing_travel_social_neyworks_fe.greeting");

        // Verify the result
        assertNotNull(project.getTasks().findByName("greeting"));
    }
}
