export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const validateForm = (formData: { email: string; password: string; confirmPassword?: string }): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.email) {
    errors.push('Email is required');
  } else if (!validateEmail(formData.email)) {
    errors.push('Invalid email format');
  }

  if (!formData.password) {
    errors.push('Password is required');
  } else if (!validatePassword(formData.password)) {
    errors.push('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
  }

  if (formData.confirmPassword !== undefined) {
    if (!formData.confirmPassword) {
      errors.push('Confirm password is required');
    } else if (formData.password !== formData.confirmPassword) {
      errors.push('Passwords do not match');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}; 