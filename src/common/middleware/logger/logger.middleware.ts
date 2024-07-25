import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("Request ", new Date().toISOString(), req.body);
    console.log("Request ", new Date().toISOString(), res.body);
    next();
  }
}
