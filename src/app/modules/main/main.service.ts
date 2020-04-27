import { Injectable } from '@angular/core';
import { ApiRequestService } from 'src/app/shared';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor(
        private apiService: ApiRequestService
    ) { }

    gitRepositoryList(count) {
        return this.apiService.get('gitRepository', '?q=topic&page=' + count);
    }

}
