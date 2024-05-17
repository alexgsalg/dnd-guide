import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ISpells } from '@spells/state/spells.interface';
import { debounceTime, distinctUntilChanged, finalize, tap } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    ReactiveFormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;
  @Input() options: ISpells[] = [];
  @Input() field: string = '';
  @Output() onSelection: EventEmitter<ISpells[]> = new EventEmitter<
    ISpells[]
  >();
  @Output() searchLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  term = new FormControl('');

  ngOnInit() {
    this.filter();
  }

  filter(): void {
    this.term.valueChanges
      .pipe(
        tap(() => this.searchLoading.emit(true)),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        if (!val) {
          this.onSelection.emit(this.options);
          this.searchLoading.emit(false);
          return;
        }
        const filteredOptions = this.options.filter((o: ISpells) =>
          o.name.toLowerCase().includes(val)
        );
        this.onSelection.emit(filteredOptions);
        this.searchLoading.emit(false);
      });
  }
}
