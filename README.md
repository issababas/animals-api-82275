# Animals API 🐾

API REST desarrollada con NestJS para administrar animales mediante operaciones CRUD.

## Tecnologías

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- class-validator
- Bruno
- Git / GitHub

## Entidad Animal

La API maneja la entidad `Animal` con los siguientes campos:

| Campo | Tipo | Descripción |
|---|---|---|
| id | number | Identificador único autogenerado |
| nombre | string | Nombre del animal |
| especie | string | Especie del animal |
| raza | string | Raza del animal |
| edad | number | Edad en años |
| peso | number | Peso en kilogramos |

## Endpoints

### Crear animal

```http
POST /animals