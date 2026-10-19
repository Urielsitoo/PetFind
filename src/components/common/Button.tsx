// src/components/common/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../config/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'secondary' || variant === 'ghost' ? COLORS.primary : COLORS.white} />
      ) : (
        <Text style={[styles.text, styles[`${variant}Text`], disabled && styles.disabledText]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    marginVertical: SPACING.sm,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondaryLight,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: COLORS.danger,
  },
  disabled: {
    backgroundColor: COLORS.neutralLight,
  },
  text: {
    ...TYPOGRAPHY.h3,
  },
  primaryText: {
    color: COLORS.white,
  },
  secondaryText: {
    color: COLORS.neutralDark,
  },
  ghostText: {
    color: COLORS.neutralMedium,
  },
  dangerText: {
    color: COLORS.white,
  },
  disabledText: {
    color: COLORS.neutralMedium,
  },
});