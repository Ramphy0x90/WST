import { provideRouter, Routes } from '@angular/router';
import { NavBarOption } from './types/nav-bar-option';
import { HomeComponent } from './pages/home/home.component';
import { FlagsComponent } from './pages/flags/flags.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const enum ROUTES {
    HOME = "home",
    FLAGS = "flags",
    QUIZ = "quiz"
}

export const NAV_BAR_ROUTES: readonly NavBarOption[] = [
    { label: "Home", route: ROUTES.HOME },
    { label: "Flags", route: ROUTES.FLAGS },
    { label: "Quiz", route: ROUTES.QUIZ }
];

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: ROUTES.HOME, component: HomeComponent },
    { path: ROUTES.FLAGS, component: FlagsComponent },
    { path: ROUTES.QUIZ, component: QuizComponent }
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
})