# Exercise Management Guide

## 📁 Where to Add Exercises

**Main file:** `src/data/exercisesSimple.ts`

## Simple Format

Use the simplified syntax:

```typescript
{
  title: "Exercise Title",
  text: "French text with {infinitive|conjugated} verbs to fill in."
}
```

## Adding New Exercises

Edit `src/data/exercisesSimple.ts` and add to the `simpleExercises` array:

```typescript
{
  title: "Au Supermarché",
  text: "Hier, je {aller|suis allé} au supermarché et j'{acheter|ai acheté} du pain."
},
```

## Format Rules

1. **Verbs**: Use `{infinitive|conjugated}` syntax
2. **Multiple verbs**: Each gets its own `{verb|form}`
3. **Apostrophes**: Handle normally: `j'ai`, `l'eau`
4. **Quotes**: Use double quotes for titles

## Examples

### Simple Present

```typescript
{
  title: "Au Café",
  text: "Je {manger|mange} une pomme et je {boire|bois} de l'eau."
}
```

### Past Tense

```typescript
{
  title: "Hier Soir",
  text: "Hier, nous {aller|sommes allés} au cinéma et nous {voir|avons vu} un film."
}
```

### Future Tense

```typescript
{
  title: "Demain",
  text: "Demain, tu {partir|partiras} en vacances et tu {visiter|visiteras} Paris."
}
```

### Subjunctive

```typescript
{
  title: "Il Faut Que",
  text: "Il faut que vous {être|soyez} à l'heure et que vous {apporter|apportiez} vos documents."
}
```

## Benefits

-   **90% less verbose** than original format
-   **Easy to read** and edit
-   **No position tracking** needed
-   **Automatic parsing** to full format
-   **Quick additions** possible
