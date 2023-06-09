"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const beers_module_1 = require("./beers/beers.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const beers_controller_1 = require("./beers/beers.controller");
const beers_service_1 = require("./beers/beers.service");
const connexion_entity_1 = require("./connexion/connexion.entity");
const connexion_controller_1 = require("./connexion/connexion.controller");
const connexion_service_1 = require("./connexion/connexion.service");
const beer_bar_controller_1 = require("./beer-bar/beer-bar.controller");
const beer_bar_module_1 = require("./beer-bar/beer-bar.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig), beers_module_1.BeersModule, typeorm_1.TypeOrmModule.forFeature([connexion_entity_1.Connexion]), beer_bar_module_1.BeerBarModule],
        controllers: [beers_controller_1.BeersController, connexion_controller_1.ConnexionController, beer_bar_controller_1.BeerBarController],
        providers: [beers_service_1.BeersService, connexion_service_1.ConnexionService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map