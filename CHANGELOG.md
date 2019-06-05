# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0]  - 05-06-2019

### Added
- Created database seeders ([fc3a2a6](https://github.com/FaZeRs/naurislinde.com/commit/fc3a2a609113f7f0f68c230757768ad6cffd5aa9))([d767557](https://github.com/FaZeRs/naurislinde.com/commit/d767557c497842f232b87abab25706867d572853))([089c117](https://github.com/FaZeRs/naurislinde.com/commit/089c11784f2a0e59d6c7016a148946464d26f672))
- Created filterable projects ([cbd956d](https://github.com/FaZeRs/naurislinde.com/commit/cbd956d3d21602a2b605648937fdc24aae357686))
- Implemented Education and Experience ([182a729](https://github.com/FaZeRs/naurislinde.com/commit/182a729a46ed57f38d022db1c333827fb4af19b5))
- Implemented Settings ([350deb8](https://github.com/FaZeRs/naurislinde.com/commit/350deb8cffecb7e9fde8d7250f5509ce1681fe83))
- Translatable settings ([dff5ba5](https://github.com/FaZeRs/naurislinde.com/commit/dff5ba5e2b376571b2ae375d4006cf163c3b47db))
- Reload content when locale is changed ([0382b36](https://github.com/FaZeRs/naurislinde.com/commit/0382b3628d10bddd14d5909497be9c8645632e76))
- Use value from .env file for API_URL ([5b31185](https://github.com/FaZeRs/naurislinde.com/commit/5b3118587ea66a61506b097b64345748409af6b2))

### Changed
- Add links field only on update ([8b5a9de](https://github.com/FaZeRs/naurislinde.com/commit/8b5a9ded3c9a52d5e5121a93af84466de288d57f))
- Use Laravel Hash facade ([cc830fb](https://github.com/FaZeRs/naurislinde.com/commit/cc830fb33df43225734ff5e401e11e8d737518b3))
- Changed increment to bigIncrement ([8582eeb](https://github.com/FaZeRs/naurislinde.com/commit/8582eeb532db8413ecf29ac7ffca23af05bddb05))
- Changed minimal php version to 7.2 ([00f97bb](https://github.com/FaZeRs/naurislinde.com/commit/00f97bb0b7f997e5a0996997c045696fed0a7421))
- Removed image attribute value if nothing is uploaded ([aa17d7d](https://github.com/FaZeRs/naurislinde.com/commit/aa17d7d7a0cdafb5fde0c2bd82eb48286e13c5ad))
- Updated Travis CI configuration ([3497344](https://github.com/FaZeRs/naurislinde.com/commit/349734497bb282751fcdfab2cb1d3f6abf91e954))

### Fixed
- Check if $value isn't empty ([ca054eb](https://github.com/FaZeRs/naurislinde.com/commit/ca054eb8f6408350062c9172c22ef4ce52b6c9f7))
- Fixed localization ([2a19468](https://github.com/FaZeRs/naurislinde.com/commit/2a19468be92bbf06179043cecfe7c28a3d20e714))([61ead68](https://github.com/FaZeRs/naurislinde.com/commit/61ead680508d9cf2b4d8451ed0c02e4db1481043))
- Fixed contact form ([0af7381](https://github.com/FaZeRs/naurislinde.com/commit/0af73815fb284b314279358c0f5ba0b90cbd57ca))

## [2.0.0]  - 04-04-2019

### Added
- Added 'Fork me' image & Increase window page offset for menu color change ([52857e1](https://github.com/FaZeRs/naurislinde.com/commit/52857e11d71b638eb53e22952dd4f579541384d9))
- Added Larastan ([364f4f1](https://github.com/FaZeRs/naurislinde.com/commit/364f4f1ceb8af1018c7726a5b98043995fa5140d))
- Implement Bugsnag ([faf62b5](https://github.com/FaZeRs/naurislinde.com/commit/faf62b5e46962791809ba5e4748b620c0110af42))
- Implement Laravel Horizon ([5e1843d](https://github.com/FaZeRs/naurislinde.com/commit/5e1843d857b5195a776255772f007900be09ba5b))
- Added .phpunit.result.cache to the .gitignore ([dc4101a](https://github.com/FaZeRs/naurislinde.com/commit/dc4101a88951fd022b2dc1daf416fdfeca3a5e8d))
- Created Portfolio CRUD ([6b6b8ce](https://github.com/FaZeRs/naurislinde.com/commit/6b6b8cecd562f71bf6ecf2e2d079f2a1cecee448))
- Implemented Telescope ([363bb50](https://github.com/FaZeRs/naurislinde.com/commit/363bb5001e6bb975fbd8fd361041bdb71e0df36a))
- Implemented Backpack ([7863e9a](https://github.com/FaZeRs/naurislinde.com/commit/7863e9aeef0657a52e39055e8a8198f4b561bb28))([3093317](https://github.com/FaZeRs/naurislinde.com/commit/3093317482204dbeed8faa75378306ea3e5ff09b))
- Added laravel-dump-server ([70d1c86](https://github.com/FaZeRs/naurislinde.com/commit/70d1c86fe138b36fbda70d0b752eba8b89e6ea98))
- Added name prefix to routes and named routes ([1b4ba1d](https://github.com/FaZeRs/naurislinde.com/commit/1b4ba1d3c3ada65bd777a7ec731304501da824ba))

### Changed
- Updated Template ([7ccc5ce](https://github.com/FaZeRs/naurislinde.com/commit/7ccc5ce0b32da35815db308c5c76de7aa2b88f26))
- Updated to Laravel 5.7 ([ead3e58](https://github.com/FaZeRs/naurislinde.com/commit/ead3e585b8a61c9367fdf4482bbf9f1ecab6afde))([7940a3e](https://github.com/FaZeRs/naurislinde.com/commit/0be999f255058224f2e68cd9ea02e7d34bd46e43))([2f7a2ae](https://github.com/FaZeRs/naurislinde.com/commit/2f7a2aed1277d32133441ce58fe316b8a6d981f3))([d289622](https://github.com/FaZeRs/naurislinde.com/commit/d289622fac80588d77522f2097200911cc7b15a8))
- Updated Docker ([25eebd2](https://github.com/FaZeRs/naurislinde.com/commit/25eebd243765870f12bb96f9c097111bd85f06b6))([92015ce](https://github.com/FaZeRs/naurislinde.com/commit/92015ce3086de1e0addb5053dbdf78e0938c9367))([8565a79](https://github.com/FaZeRs/naurislinde.com/commit/8565a793cf42855f8512fb784f5202cdfed13083))
- Updated Docker build to PHP 7.3 ([d45d012](https://github.com/FaZeRs/naurislinde.com/commit/d45d0125db100c55b3858628764f75c1b032ce86))
- Switched to npm ([3828d85](https://github.com/FaZeRs/naurislinde.com/commit/3828d85cd72f0aa8cbb07ba2b49dd0e653b523c7))
- Updated Vuetify ([39f2374](https://github.com/FaZeRs/naurislinde.com/commit/39f23748a9c9345050ad6087c277c87a2be5224b))
- Updated to Laravel 5.8 & Updated Horizon & Telescope ([f2f43d1](https://github.com/FaZeRs/naurislinde.com/commit/f2f43d16ef81ba92d14853625e0461b44db8655f))([c6ab792](https://github.com/FaZeRs/naurislinde.com/commit/c6ab7923a0e525444d100b18deb855ce93446b7f))
- Updated frontend & display database data ([001912b](https://github.com/FaZeRs/naurislinde.com/commit/001912b3c6aab9f1a279b9eda146562ccc29b904))

### Fixed
- Initialize recaptcha only when sitekey is present ([9595ca0](https://github.com/FaZeRs/naurislinde.com/commit/9595ca0d89cd0fb7a3a9033613a43767ba646d19))
- Larastan error fixes ([364f4f1](https://github.com/FaZeRs/naurislinde.com/commit/364f4f1ceb8af1018c7726a5b98043995fa5140d))
- Migrate database before passport:install ([f4e9452](https://github.com/FaZeRs/naurislinde.com/commit/f4e94521713a544f4f1a6b8b7a8c2cc43b304382))
- Fixed dynamic imports ([c090276](https://github.com/FaZeRs/naurislinde.com/commit/c090276352b0cabd9c418ba09b86a966f64ab5ae))([be1ea73](https://github.com/FaZeRs/naurislinde.com/commit/be1ea73015e197c628d2b727fe499299cd636719))([67d4e96](https://github.com/FaZeRs/naurislinde.com/commit/67d4e962d6e3f551d11a65ab2399aeddac15f26e))

### Removed
- Removed strong password validation & reduced password length to 6 characters ([7940a3e](https://github.com/FaZeRs/naurislinde.com/commit/7940a3ee07c33ac9114d157cf473f6898ef36465))

## [1.4.0]  - 27-07-2018

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

## [1.3.1]  - 27-07-2018

### Added
- Added passport:install to composer install ([b7e53ad](https://github.com/FaZeRs/naurislinde.com/commit/b7e53ad3152efa1307f3d00c12054e55543c75f0))

### Changed
- Use non-root user to avoid permission issues with Linux OS ([dbf39c1](https://github.com/FaZeRs/naurislinde.com/commit/dbf39c1b75d6340db1474419abb9ac83c6311c2a))
- Use static values to create database before .env file is created  ([b984e32](https://github.com/FaZeRs/naurislinde.com/commit/b984e3276ec2e82ca1d17383ffbc3a9c7cb06556))

## [1.3.0]  - 06-06-2018

### Added
- Added API Authentication ([9d2b5d0](https://github.com/FaZeRs/naurislinde.com/commit/9d2b5d0c53b2485bafd3e2a13936da4229a2053e))

### Changed
- Removed SetLocale middleware ([8a89e5b](https://github.com/FaZeRs/naurislinde.com/commit/8a89e5b5ad6f319eabb6ad5becdc0c5cf2ef7745))
- Updated dependencies and assets ([5740cb7](https://github.com/FaZeRs/naurislinde.com/commit/5740cb7fa22cceec86ec7f856e87f49c1529c1bc))

## [1.2.0]  - 12-05-2018

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

## [1.1.0]  - 26-04-2018

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

## 1.0.0 - 25-04-2018
- Initial commit.

[Unreleased]: https://github.com/fazers/naurislinde.com/compare/2.1.0...HEAD
[2.1.0]: https://github.com/fazers/naurislinde.com/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/fazers/naurislinde.com/compare/1.4.0...2.0.0
[1.4.0]: https://github.com/fazers/naurislinde.com/compare/1.3.1...1.4.0
[1.3.1]: https://github.com/fazers/naurislinde.com/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/fazers/naurislinde.com/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/fazers/naurislinde.com/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/fazers/naurislinde.com/compare/1.0.0...1.1.0
