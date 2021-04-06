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
const address_module_1 = require("./address/address.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const charactetiristic_module_1 = require("./charactetiristic/charactetiristic.module");
const image_module_1 = require("./image/image.module");
const message_module_1 = require("./message/message.module");
const mongoose_config_module_1 = require("./mongoose-config/mongoose-config.module");
const owner_module_1 = require("./owner/owner.module");
const rate_module_1 = require("./rate/rate.module");
const rental_place_module_1 = require("./rental-place/rental-place.module");
const report_module_1 = require("./report/report.module");
const rule_module_1 = require("./rule/rule.module");
const school_module_1 = require("./school/school.module");
const service_module_1 = require("./service/service.module");
const student_module_1 = require("./student/student.module");
const user_module_1 = require("./user/user.module");
if (process.env.NODE_ENV !== 'PROD') {
    require('dotenv').config();
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            message_module_1.MessageModule,
            rate_module_1.RateModule,
            user_module_1.UserModule,
            owner_module_1.OwnerModule,
            student_module_1.StudentModule,
            image_module_1.ImageModule,
            report_module_1.ReportModule,
            rental_place_module_1.RentalPlaceModule,
            school_module_1.SchoolModule,
            address_module_1.AddressModule,
            rule_module_1.RuleModule,
            service_module_1.ServiceModule,
            charactetiristic_module_1.CharactetiristicModule,
            mongoose_config_module_1.MongooseConfigModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map