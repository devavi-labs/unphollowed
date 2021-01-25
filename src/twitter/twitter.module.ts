import { Module } from "@nestjs/common"
import { Constants } from "src/constants"
import { TwitterController } from "./twitter.controller"
import { TwitterService } from "./twitter.service"

@Module({
  controllers: [TwitterController],
  providers: [TwitterService, Constants],
})
export class TwitterModule {}