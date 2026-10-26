# Guía de contribución

Gracias por querer colaborar con el Archivo Hispano de Heráldica y Vexilología. Para mantener el proyecto ordenado, te pedimos que sigas estas reglas.

## 1. Flujo de trabajo: fork y pull request

No se modifica el repositorio original directamente. Todos los cambios pasan por un fork y un pull request.

1. Haz un **fork** del repositorio en tu cuenta.
2. Clona tu fork en local:
   ```bash
   git clone https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
   ```
3. Crea una **rama nueva** para tus cambios (no trabajes en `main`):
   ```bash
   git checkout -b nombre-descriptivo-de-la-rama
   ```
4. Haz tus cambios y súbelos a tu fork con commits claros.
5. Abre un **pull request** hacia el repositorio original, explicando qué cambias y por qué.
6. Espera la revisión. Es posible que se te pidan cambios antes de aceptarlo.

### Qué esperamos de un pull request

- Un solo tema por pull request. Si son cambios distintos, abre varios.
- Descripción clara de lo que se ha modificado.
- Código y estilos coherentes con lo que ya existe (por ejemplo, todo se nombra en español y en camelCase: `logoDiv`, `buscadorInput`, `tarjeta`...).
- Uso de conventional commits para enviar un commit [Documentacion](https://www.conventionalcommits.org/es/v1.0.0/)
- Que la página siga funcionando correctamente tras tus cambios.

## 2. Uso de inteligencia artificial

Se permite usar herramientas de IA, pero con cabeza:

- **Tú eres el responsable** de todo lo que envíes, lo haya escrito una persona o una IA. No envíes nada que no hayas entendido.
- **Revisa y prueba** el resultado antes de abrir el pull request. No se aceptan cambios copiados sin comprobar.
- **Respeta los derechos de autor.** No subas imágenes, escudos, banderas o textos generados o copiados cuyo origen y licencia desconozcas.
- **Sé transparente.** Si una parte importante del cambio ha sido generada con IA, indícalo en la descripción del pull request.
- Los pull requests masivos, repetitivos o de baja calidad generados automáticamente pueden ser rechazados sin más.
