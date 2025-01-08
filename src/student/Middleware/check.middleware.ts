import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CheckMidlleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('CheckMidlleware', req.body);
    next();
  }
}
@Injectable()
export class CheckAgeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('CheckAgeMiddleware', req.body);
    next();
  }
}
