package PP.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Habilitar el acceso a las imágenes estáticas desde la carpeta "uploads" en el directorio de recursos
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("classpath:/uploads/");
    }
}
