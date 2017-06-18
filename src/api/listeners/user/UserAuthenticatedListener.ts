import { inject, named } from 'inversify';
import { Types } from '../../../constants/Types';
import { Core } from '../../../core/Targets';
import { Log } from '../../../core/log/';


export class UserAuthenticatedListener {

    static Event = Symbol('UserAuthenticatedListener');

    public log: Log;

    constructor(
        @inject(Types.Core) @named(Core.Log) Logger: typeof Log
    ) {
        this.log = new Logger('api:listeners:UserAuthenticatedListener');
    }

    public run(user: any): void {
        this.log.info('Receive event UserAuthenticatedListener', user);
    }

}