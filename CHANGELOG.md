# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.0]  - 2018-07-27

### Changed
- Migrate to Laravel 5.6 ([e015cae](https://github.com/FaZeRs/naurislinde.com/commit/e015caef3e0660cc9cb5866963fdaa6d8bc14dfb))
- Updated packages ([ac14174](https://github.com/FaZeRs/naurislinde.com/commit/ac1417410baf56845cfac80cd3d3c2a82df64cd0)) ([9b2289e](https://github.com/FaZeRs/naurislinde.com/commit/9b2289ec48ca17183cb3c6ff74ea2392f524296f))
- Removed helpers file ([99997fb](https://github.com/FaZeRs/naurislinde.com/commit/99997fb959efaee1a71f2a67af14a81b34901aac))
- Use Alpine 3.8 repositories ([6e9e24d](https://github.com/FaZeRs/naurislinde.com/commit/6e9e24df9b915a2b75f7e6cbc12a841caa57a85c))
- Changed <v-text-field multi-line> to <v-textarea> ([f1b5205](https://github.com/FaZeRs/naurislinde.com/commit/f1b52053d272f85205f457646c2588bb238f35e7))

### Fixed
- Fixed issue when could not yarn in docker container ([10031d5](https://github.com/FaZeRs/naurislinde.com/commit/10031d511e651a79a981ac192f23b6b2a92700e1))
- Typo fixes ([ae1cf84](https://github.com/FaZeRs/naurislinde.com/commit/ae1cf846c38e9ee0962ec2d694004733db6c1c7f)) ([361ce47](https://github.com/FaZeRs/naurislinde.com/commit/361ce474d3823b79bc7ce7cbf1f2428d8d7ef65d)) ([2b507f2](https://github.com/FaZeRs/naurislinde.com/commit/2b507f256da6ed8d026cc0b877a140ca386152e1))
- Fixed issues for small device ([f5824b3](https://github.com/FaZeRs/naurislinde.com/commit/f5824b3f293274d149139a52bb3e3ba19876a8fc))

## [1.3.1]  - 2018-07-27

### Added
- Added passport:install to composer install ([b7e53ad](https://github.com/FaZeRs/naurislinde.com/commit/b7e53ad3152efa1307f3d00c12054e55543c75f0))

### Changed
- Use non-root user to avoid permission issues with Linux OS ([dbf39c1](https://github.com/FaZeRs/naurislinde.com/commit/dbf39c1b75d6340db1474419abb9ac83c6311c2a))
- Use static values to create database before .env file is created  ([b984e32](https://github.com/FaZeRs/naurislinde.com/commit/b984e3276ec2e82ca1d17383ffbc3a9c7cb06556))

## [1.3.0]  - 2018-06-06

### Added
- Added API Authentication ([9d2b5d0](https://github.com/FaZeRs/naurislinde.com/commit/9d2b5d0c53b2485bafd3e2a13936da4229a2053e))

### Changed
- Removed SetLocale middleware ([8a89e5b](https://github.com/FaZeRs/naurislinde.com/commit/8a89e5b5ad6f319eabb6ad5becdc0c5cf2ef7745))
- Updated dependencies and assets ([5740cb7](https://github.com/FaZeRs/naurislinde.com/commit/5740cb7fa22cceec86ec7f856e87f49c1529c1bc))

## [1.2.0]  - 2018-05-12

### Added
- Added Docker ([fa0ef43](https://github.com/FaZeRs/naurislinde.com/commit/fa0ef437ed8f8b402a53e07a23803528f2841b84))
- Added return type declarations ([1ad8809](https://github.com/FaZeRs/naurislinde.com/commit/1ad88097ed0a84b2379f9de6739f07849758fd3e))

### Changed
- Return json & Add return type declaration ([da4ac62](https://github.com/FaZeRs/naurislinde.com/commit/da4ac62483071d6ac4d8f312d9d8bb4abd5cbcf5))
- Use ::class ([09cab17](https://github.com/FaZeRs/naurislinde.com/commit/09cab17ffd98091568d793eadddb35b661bc0907)) ([232629b](https://github.com/FaZeRs/naurislinde.com/commit/232629b6aa161925b9d3520a719fcf434a421ace))
- Updated validation translations ([f6a7b60](https://github.com/FaZeRs/naurislinde.com/commit/f6a7b60b10358f95b8f52871ecafddbfbe837ae0))
- Added .yml file type to .editorconfig ([a383382](https://github.com/FaZeRs/naurislinde.com/commit/a383382aeec7112f3fd86946ab1435a2f7329274))
- Changed to dirname instead of realpath ([0390cf6](https://github.com/FaZeRs/naurislinde.com/commit/0390cf6a1e7049a63637dc83b77007a2e268fffd))
- Set default string length if mysql charset is utf8mb4 and use https only in production ([86b799f](https://github.com/FaZeRs/naurislinde.com/commit/86b799fb8797887efd17b9b8aad55e8ddaa022ba))
- Changed $e to $exception ([3fd1c6a](https://github.com/FaZeRs/naurislinde.com/commit/3fd1c6a709f8376019857a9f05ca660954d24480))

### Fixed
- Fixed 'composer test' & remove illuminate packages ([055f6ae](https://github.com/FaZeRs/naurislinde.com/commit/055f6ae67a11701a5320f2e9dca2fb2c7903c400))
- Fixed for json responses ([9047b43](https://github.com/FaZeRs/naurislinde.com/commit/9047b430b285797a98848957d476ec73a705cdd0))
- Removed laravel mix purgecss ([d07057c](https://github.com/FaZeRs/naurislinde.com/commit/d07057cbb9c003ef48d34c51b9b90fdce8cf8013))

## [1.1.0]  - 2018-04-26

### Added
- Added EU Cookie law ([65b8776](https://github.com/FaZeRs/naurislinde.com/commit/c164dc437db60e6f2cf8617e1efd2edc73d86331))
- Added reCaptcha ([c164dc4](https://github.com/FaZeRs/naurislinde.com/commit/2494af209d1b5410a6d22540b1de4ed7ba214333))

### Changed
- Update google analytics script ([e002736](https://github.com/FaZeRs/naurislinde.com/commit/e002736ea3782cbe3779da7edce6fe1fa19cb23c))
- Update favicon ([a547f15](https://github.com/FaZeRs/naurislinde.com/commit/a547f15913c3bac5069b5fe5d1ca4a13dcf88206))
- Use .env values for google analytics & reCaptcha ([20d41eb](https://github.com/FaZeRs/naurislinde.com/commit/20d41eb1d8159925b084384085da9e29a17c64b5))

### Fixed
- Fixed links ([65b8776](https://github.com/FaZeRs/naurislinde.com/commit/65b8776fb48abca9243ae16ec4ad6bea10f140f7)) ([ff90980](https://github.com/FaZeRs/naurislinde.com/commit/ff90980b82eb22d6c24f08e4a72ade4311a529fb)) ([f89ce58](https://github.com/FaZeRs/naurislinde.com/commit/f89ce584103a9c15af4d3e40466207abe0993948))
- Remove duplicate captcha reset ([f7ef4b9](https://github.com/FaZeRs/naurislinde.com/commit/f7ef4b95c93aa38fb6344321aed40aa4f5629ce4))

## 1.0.0 - 2018-04-25
- Initial commit.

[Unreleased]: https://github.com/fazers/naurislinde.com/compare/1.4.0...HEAD
[1.4.0]: https://github.com/fazers/naurislinde.com/compare/1.3.1...1.4.0
[1.3.1]: https://github.com/fazers/naurislinde.com/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/fazers/naurislinde.com/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/fazers/naurislinde.com/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/fazers/naurislinde.com/compare/1.0.0...1.1.0
