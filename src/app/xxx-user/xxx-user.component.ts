import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {XxxContent} from "../xxx-common/xxx-content/xxx-content.types";
import {XxxContentFacadeService} from "../xxx-common/xxx-content/xxx-content-facade.service";
import {XxxUser} from "./xxx-user.types";
import {XxxUserFacadeService} from "./xxx-user-facade.service";

@Component({
  selector: 'app-xxx-user',
  templateUrl: './xxx-user.component.html',
  styleUrl: './xxx-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxUserComponent {
  contentKey: string = 'user';
  content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
  isUsersEmpty$: Observable<boolean> = this.userFacade.isUsersEmpty$;
  isUsersLoaded$: Observable<boolean> = this.userFacade.isUsersLoaded$;
  isUsersLoading$: Observable<boolean> = this.userFacade.isUsersLoading$;
  selectedUserId$: Observable<number | undefined> = this.userFacade.selectedUserId$;
  users$: Observable<XxxUser[]> = this.userFacade.users$;

  constructor(
    private contentFacade: XxxContentFacadeService,
    private userFacade: XxxUserFacadeService) {
    this.contentFacade.getContent(this.contentKey)
    this.userFacade.dispatchShowUsers();
  }

  rowClick(user: XxxUser) {
    this.userFacade.dispatchSelectUser(user.id);
  }
}
