<template lang="pug">
  SimpleNewsletter(v-slot="{ slotProps }")
    .newsletter__wrap
      .newsletter__title {{ slotProps.title }}
      .newsletter__content {{ slotProps.content }}
      .newsletter__fields
        input.newsletter__input(
          v-model="slotProps.mail"
          type="email"
          name="email"
          aria-label="Email"
          placeholder="Email"
          required
          autocapitalize="off"
          autocorrect="off"
          data-cy="email"
        )
        button.newsletter__button(type="submit" data-cy="submit") {{ slotProps.submitText }}
</template>

<script>
import SimpleNewsletter from 'vuepress-plugin-mailchimp/src/components/SimpleNewsletter'
export default {
  components: { SimpleNewsletter },
}
</script>

<style lang="stylus">
.newsletter
  .newsletter &__wrap
    background-color $newsletterBgColor
    max-width none

  .newsletter &__fields
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 10px

  .newsletter &__input
    margin-bottom 0

  .newsletter &__button
    transition box-shadow 0.2s ease, transform 0.2s ease

    &:hover
      box-shadow 1px 1px 5px rgba(0, 0, 0, 0.6)
      transform translateY(-2px)

@media (max-width: $MQMobile)
  .newsletter
    .newsletter &__fields
      display block

    .newsletter &__input
      margin-bottom 10px
</style>
