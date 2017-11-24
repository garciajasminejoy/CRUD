import { TestBed, inject } from '@angular/core/testing';

import { PostsTodosService } from './posts-todos.service';

describe('PostsTodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsTodosService]
    });
  });

  it('should be created', inject([PostsTodosService], (service: PostsTodosService) => {
    expect(service).toBeTruthy();
  }));
});
